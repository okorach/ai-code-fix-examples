# ai-code-fix-examples

This repo provides demos of AI Code Fix.
Currently there is only 1 example (SQL Injection in python) but it shall be expanded with other examples in the future

Using the demo:
- Make sure AI Code Fix is be enabled in SonarQube Server
- Clone the repo
- Run a scan (with `sonar-scanner`). You should have 2 AI Code Fix'able issues generated:
  - An insecure Open Redirect in [python/fix-me.py - Line 9](python/fix-me.py#L9)
  - An SQL Injection in [python/fix-me.py - Line 17](python/fix-me.py#L17)
- Bind the project between SonarQube IDE and SonarQube Server (Project key `ai-code-fix` unless you change it in `sonar-project.properties`)
- In SonarQube Server, browse to either issue, you should have the **Generate AI Fix** button.
  Note: Once the AI Fix is generated, if you return to the issue, it may show **See AI Fix** instead.
- Once the AI Code Fix is generated, you should have a **View fix in IDE** button to patch the code in your IDE
