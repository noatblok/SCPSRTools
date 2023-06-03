import pynecone as pc
import json

class ScpsiteroleplayConfig(pc.Config):
    pass
config = ScpsiteroleplayConfig(
    app_name="scpsiteroleplay",
    db_url="sqlite:///pynecone.db",
    bun_path="/app/.bun/bin/bun",
    telemetry_enabled=False,
    api_url="0.0.0.0:8100",
    port=4500
)