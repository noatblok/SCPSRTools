import pynecone as pc
import json

class ScpsiteroleplayConfig(pc.Config):
    pass
config = ScpsiteroleplayConfig(
    app_name="scpsiteroleplay",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
    telemetry_enabled=False,
    api_url="0.0.0.0:8100",
    bun_path="/app/.bun/bin/bun"
)