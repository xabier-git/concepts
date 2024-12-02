import json

import yaml

jsonstring = '{"name": "erik", "age": 38, "married": true}'
person = json.loads(jsonstring)
print(person['name'], 'is', person['age'], 'years old')
print(person)

#json_string = json.dumps(person)
json_string = json.dumps(person, indent=2)
print(json_string)

# To make sure, let's print the type too
print(type(json_string))

with open('config.yaml', 'r') as file:
    prime_service = yaml.safe_load(file)

print(prime_service['prime_numbers'][0])
print(prime_service['rest']['url'])

with open('config.yaml', 'r') as file:
    configuration = yaml.safe_load(file)

with open('config.json', 'w') as json_file:
    json.dump(configuration, json_file)
    
output = json.dumps(json.load(open('config.json')), indent=2)
print(output)


with open('config.json', 'r') as file:
    configuration = json.load(file)

with open('config.yaml', 'w') as yaml_file:
    yaml.dump(configuration, yaml_file)

with open('config.yaml', 'r') as yaml_file:
    print(yaml_file.read())