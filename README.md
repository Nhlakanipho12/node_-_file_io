# node_-_file_io
Create the following functionality in a TDD way.

Create a class called Visitor. Instances of this class should have the following properties:
full name
age
date of visit
time of visit
comments
name of the person who assisted the visitor

Create a function called save that saves the visitor’s data to a JSON file. The file name should be named like this visitor_{their_full_name}.json.
alice.save()   # results in visitor_alice_cooper.json
bob.save()     # results in visitor_bob_marley.json
charlie.save() # results in visitor_charley_sheen.json
Notice that the full name used in the file is all lower-case and spaces are replaced by underscores.

Create a function called load that takes in a name and then grabs a Visitor object from file. It should simply console.log the visitor.
eg:

load("Alice Cooper")
// prints out all of Alice's goodies


load("Bob Marley")
// Same deal for good ol Bob
