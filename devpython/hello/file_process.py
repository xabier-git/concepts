import subprocess
subprocess.run(["ls","-l"])
result = subprocess.run(['python3', '--version'], capture_output=True, encoding='UTF-8')
print(result)