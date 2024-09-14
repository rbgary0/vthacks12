import JsonHandler, DatabaseMD

class ref():

    # Create jsonHandler to load/export
    jsonhandler = JsonHandler()
    
    # Create databaseMD to send to mongo
    db = DatabaseMD()

    # load json assuming the file is
    # stored here and is called input.json
    jsonhandler.load_json("input.json")

    # If you want to send to MongoDB you would run this
    db.send(jsonhandler.getDictionary())

    # Print what is in the dictionary
    # print("Loaded Data:")
    # print(jsonhandler.getDictionary)

    # If you want to export from MongoDB you would run this
    posts = db.get()
    # Posts contains an array of all the cards (stored as dicts)

    # Save data to a new Json File
    jsonhandler.export_json("output.json", posts)
