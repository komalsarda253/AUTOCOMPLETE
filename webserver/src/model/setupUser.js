const connection = require( "../utilities/connections" )

let restaurants = [
    {
        name: "Mission Chinese Food",
        address: "171 E Broadway, New York, NY 10002",
        items:["Dim Sums","Hot and Sour Soup","Quick Noodles","Szechwan Chilli Chicken","Spring Rolls","Stir Fried Tofu with Rice","Shitake Fried Rice with Water Chestnuts","Chicken with Chestnuts"],
      }, {
        name: "Domino's Pizza",
        address: "919 Fulton St, Brooklyn, NY 11238",
        items:["Margherita Pizza","Golden Corn Pizza","Jalapeno & Red Paprika Pizza","Double Cheese Margherita Pizza","Crisp Capsicum & Fresh Tomato Pizza","Farmhouse Pizza","Spicy Triple Tango","Paneer Special Pizza"],
      },
      {
        name: "Hometown BBQ",
        address: "454 Van Brunt St, Brooklyn, NY 11231",
        items:["Sausages","Burgers","Hot dog rolls and burger buns","Chicken wings and thighs","Burger garnish: lettuce, tomato and red onion (cut into rings)","Cheese slices","Mixed Salads – basic salad, cous cous, potato salad"],
      },
      {
        name: "KFC restaurant",
        address: "454 Van Brunt St, Brooklyn, NY 11231",
        items:["Burgers","2 x Double Down Combo","2 x Double Down Burgers","Zinger Burger","Zinger Burger Combo","2 x Zinger Burgers","5 in 1 Zinger Burger Box","KFC Favorites Meal (Chicken Zinger, 4 Hot Wings, Large Popcorn)","KFC Favorites Meal (Chicken Zinger, 4 Hot Wings, Large popcorn, Pepsi Can)","Veg Zinger Burger"],
      },
      {
        name: "Taco bell",
        address: "454 Van Brunt St, Brooklyn, NY 11231",
        items:["Cheese Roll-Up","Crunchwrap Supreme","Combo Burrito","Beefy Melt Burrito","Hard Taco","XXL Grilled Stuffed Burrito","Cheesy Gordita Crunch","Honorable Mention: Cheesy Beef and Bean Burrito"],
      }
]


exports.userSetup = () => {
    return connection.getRestaurantsCollection().then( ( myCollection ) => {
        return myCollection.deleteMany().then( ( ) => {
            return myCollection.insertMany( restaurants ).then( ( data ) => {
                if( data ) {
                    return"Insertion Successfull"
                } else{
                    throw new Error( "Insertion failed" )
                }
            } )
        } )
    } )
}