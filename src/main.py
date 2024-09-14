import JsonHandler

class main():

    # Create jsonHandler to load/export
    jsonhandler = JsonHandler()

    # load json assuming the file is
    # stored here and is called input.json
    jsonhandler.load_json("input.json")

    # Print what is in the dictionary
    # print("Loaded Data:")
    # print(jsonhandler.getDictionary)
    
    # Save data to a new Json File
    jsonhandler.export_json("output.json")
