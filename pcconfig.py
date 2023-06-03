import pynecone as pc
import json

class ScpsiteroleplayConfig(pc.Config):
    pass
config = ScpsiteroleplayConfig(
    app_name="scpsiteroleplay",
    db_url="sqlite:///pynecone.db",
    bun_path="/app/.bun/bin/bun",
    telemetry_enabled=False,
    api_url="209.126.80.217:8000",
    port=3000
)