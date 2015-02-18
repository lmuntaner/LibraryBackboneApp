# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Book.create!(title: "Confederacy Of Dunces", author: "Kennedy Toole",
             description: "One of my favourites books, I lauged at every page")
             
Book.create!(title: "Postman", author: "Charles Bukowski",
             description: "This book was written in 20 days")
             
Book.create!(title: "Game Of Thrones", author: "George RR Martin",
            description: "This is a great adventure and fantasy book")

Book.create!(title: "Atlas Shrugged", author: "Ayn Rand",
            description: "The longest book I have ever faced.")
            
Book.create!(title: "Foreskin's Lament: A Memoir", author: "Shalom Auslander",
             description: "Ironic and great book. You can't stop lauging at the main character's thoughts")
 
Book.create!(title: "The Dharma Bums", author: "Jack Kerouac",
             description: "Better than 'On The Road' in my opinion")