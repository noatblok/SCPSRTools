global departmentrankval
from pcconfig import config
import json
import time
import pynecone as pc

#TODO: Add weapon stats page

with open("departments.json", "r") as f:
    departmentdict = json.load(f)
departmentoptions = ["None Chosen"]
departmentranks = {"None Chosen": {"ranks": [], "rankdata": {}}}
departmentrankval = ""
for department in departmentdict["departments"]:
    ranks = ["None Chosen"]
    rankxp = []
    rankdict = {}
    for rank in department["ranks"]:
        rankdict[rank["label"]] = rank["xp"]
        rankxp.append(rank["xp"])
        ranks.append(rank["label"])
    
    departmentranks[department["label"]] = {
        "ranks": ranks,
        "rankdata": rankdict
    }
    departmentoptions.append(department["label"])

intervals = (
    ("days", 86400),
    ("hours", 3600),
    ("minutes", 60),
    ("seconds", 1),
)

def display_time(seconds, granularity=2):
    result = {}

    for name, count in intervals:
        value = seconds // count
        if value:
            seconds -= value * count
            result[name] = int(value)
    return result

class State(pc.State):
    """The app state."""
    department: str = "None Chosen"
    departmentChosen: bool = False
    options: list = []
    xpval: int = 0
    maxxp: int = 12800
    neededxp: int = 0
    targetrank: str = "None Chosen"
    rank: str = "None Chosen"
    xpstr: str = "No Data"
    days: int = 0
    hours: int = 0
    minutes: int = 0
    timetext: str = ""
    def updateoptions(self):
        departmentrankval = self.department
        try:
            del departmentranks[self.department]["ranks"][""]
        except:
            pass
        self.options = departmentranks[self.department]["ranks"]
        self.departmentChosen = True
    def setxpval(self, xp):
        try:
            self.xpval = int(xp)
        except:
            self.xpval = 0
        self.updatexpvar()
    def updatexpvar(self):
        currentxp = int(self.xpval)
        data = []
        ranks = departmentranks[self.department]["ranks"]
        rankindex = ranks.index(self.rank)
        targetrankindex = ranks.index(self.targetrank)
        i = 0
        for rank in departmentranks[self.department]["ranks"]:
            if i > rankindex and i <= targetrankindex:
                data.append(departmentranks[self.department]["rankdata"][rank])
            i += 1
        neededxp = 0
        for xp in data:
            neededxp += xp
        totalxp = neededxp
        neededxp -= currentxp
        self.neededxp = neededxp
        self.maxxp = totalxp
        hours = neededxp / 900
        minutes = hours * 60
        seconds = minutes * 60
        values = display_time(seconds)
        try:
            self.days = values["days"]
        except:
            self.days = 0
        try:
            self.hours = values["hours"]
        except:
            self.hours = 0
        try:
            self.minutes = values["minutes"]
        except:
            self.minutes = 0
        showdays = False
        showhours = False
        showminutes = False
        count = 0
        if self.days > 0:
            showdays = True
            count += 1
        if self.hours > 0:
            showhours = True
            count += 1
        if self.minutes > 0:
            showminutes = True
            count += 1
        if count == 3:
            self.timetext = f"{self.days} days, {self.hours} hour(s), and {self.minutes} minute(s)."
        if count == 2 and showdays == True and showminutes == False:
            self.timetext = f"{self.days} days, and {self.hours} hour(s)."
        if count == 2 and showdays == False:
            self.timetext = f"{self.hours} hour(s), and {self.minutes} minute(s)."
        if count == 2 and showdays == False and showhours == False:
            self.timetext = f"{self.days} days, and {self.minutes} minute(s)."
        if count == 1 and showdays == True:
            self.timetext = f"{self.days} days."
        if count == 1 and showminutes == True:
            self.timetext = f"{self.minutes} minute(s)."
        if count == 1 and showhours == True:
            self.timetext = f"{self.hours} hour(s)."
        
    @pc.var
    def getrankoptions(self) -> list:
        data = []
        ranks = departmentranks[self.department]["ranks"]
        i = 0
        try:
            rankindex = ranks.index(self.rank)
        except:
            return ["None Chosen"]
        return ["None Chosen"] + ranks[rankindex + 1:]
def index() -> pc.Component:
    return pc.center(
        pc.responsive_grid(
            pc.vstack(
                pc.heading("SCP: Site Roleplay Tools", font_size="2em", padding_top="10%"),
                pc.box("Get started by choosing an option below."),
                pc.hstack(
                    pc.button(
                        "914 Tools", size="lg", is_disabled=True
                    ),
                    pc.link(
                        pc.button(
                            "XP Calculator", size="lg"
                        ),
                        href="/xpcalc"
                    ),
                    spacing="4",
                ),
                pc.button(
                    pc.icon(tag="moon"),
                    on_click=pc.toggle_color_mode,
                ),
                spacing="1.5em",
                font_size="2em",
            )
        )
    )
done = False
def update_ranks():
    try:
        State.updateoptions()
    except:
        pass
    return State.options[:9]

def update_target_ranks():
    try:
        State.updateoptions()
    except:
        pass
    return State.getrankoptions

def xpcalc() -> pc.Component:
    return pc.center(
        pc.vstack(
            pc.heading("XP Calculator", font_size="2em", padding_top="10%"),
            pc.box("Start by choosing a department below."),
            pc.box(
                pc.select(
                    departmentoptions,
                    on_change=State.set_department,
                    on_mouse_out=State.updateoptions
                ),
            ),
            pc.cond(
                State.department != "None Chosen",
                pc.box(
                    pc.box("Current Rank", text_align="center"),
                    pc.select(
                        update_ranks(),
                        on_focus=State.updateoptions,
                        on_change=State.set_rank
                    )
                ),
            ),
            pc.cond(
                State.rank != "None Chosen",
                pc.box(
                    pc.box("Target Rank", text_align="center"),
                    pc.select(
                        update_target_ranks(),
                        on_focus=State.updateoptions,
                        on_mouse_out=State.updatexpvar,
                        on_change=State.set_targetrank
                    )
                ),
            ),
            pc.cond(
                State.targetrank != "None Chosen",
                pc.box(
                    pc.box("Current XP", text_align="center"),
                    pc.number_input(
                        on_change=State.setxpval,
                        max_=State.maxxp,
                        min_=0,
                        allow_mouse_wheel = True,
                        font_size="0.5em",
                    )
                )
            ),
            pc.cond(
                State.targetrank != "None Chosen",
                pc.box(
                    pc.heading("Needed XP:", text_align="center"),
                    pc.text(State.neededxp + " XP", text_align="center"),
                    pc.heading("Time to get:", text_align="center"),
                    pc.text(State.timetext)
                )
            ),
            spacing="1em",
            font_size="2em",
        ),
    )

app = pc.App(state=State)
app.add_page(index)
app.add_page(xpcalc, route="/xpcalc")
app.compile()
