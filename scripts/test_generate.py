import subprocess, pathlib

ROOT = pathlib.Path(__file__).parent.parent

def test_generates_tables():
    result = subprocess.run(
        ["python3", "scripts/generate_readme.py"],
        cwd=ROOT, capture_output=True, text=True
    )
    assert result.returncode == 0, result.stderr
    readme = (ROOT / "README.md").read_text()
    assert "Groq" in readme
    assert "Together AI" in readme
    assert "2026-06-28" in readme
    assert "<!-- BEGIN_PERMANENT -->" in readme
    assert "<!-- BEGIN_CREDITS -->" in readme

def test_stats_injected():
    readme = (ROOT / "README.md").read_text()
    assert "providers" in readme
    assert "models" in readme

if __name__ == "__main__":
    test_generates_tables()
    test_stats_injected()
    print("All tests passed.")
