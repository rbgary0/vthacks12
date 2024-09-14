import json

class JsonHandler:
    # Dictionary to store json inputs
    def __init__(self):
        self.dict = {}

    # grab the dictionary
    def getDictionary(self):
        return self.dict

    # Takes in the json's file path and stores it in dict
    def load_json(self, file_path):
        # Copied this try/catch online lol
        try:
            with open(file_path, 'r') as file:
                self.dict = json.load(file)
        except FileNotFoundError:
            print(f"Error: The file '{file_path}' was not found.")
        except json.JSONDecodeError:
            print(f"Error: The file '{file_path}' is not a valid JSON file.")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

    # exports dict as a json in the designated file path
    def export_json(self, file_path):
        with open(file_path, 'w') as file:
            json.dump(self.data, file, indent=4)
