# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(email: "hello@gmail.com", password: 857392)
u2 = User.create(email: "hello@gmail.com", password: 321321)
u3 = User.create(email: "good@gmail.com", password: 321312)
u4 = User.create(email: "notgood@gmail.com", password: 123423)