import pynecone as pc
import json

class ScpsiteroleplayConfig(pc.Config):
    pass
config = ScpsiteroleplayConfig(
    app_name="scpsiteroleplay",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
    telemetry_enabled=False
)