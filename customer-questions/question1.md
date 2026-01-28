### Question

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

### Response

Hi George,

Welcome! These are really foundational concepts for search, so great questions to be asking early. I'm happy to break things down for you.

__Records__  

You can think of a record as a block of data that represents one thing that a user might want to search for like a product, a web page, or an article. The record has a set of "attributes" that contain descriptive information about that thing. For example, a record for a product might have attributes for the product's _name_, _description_, _price_, and _rating_. Each record also must contain an _objectId_ attribute which is just a unique identifier for the record that either you can set yourself or Algolia will set automatically when you create the record.

Records get stored as JSON objects, so taking our product example above, you might see a record represented like this:
```
{
    name: "Air Pro Shoes",
    description: "High top basketball shoes for indoor courts",
    price: 49.99,
    rating: 4.4,
    objectId: "aeee8ri2nn0"
}
```
Once a record is stored, its attributes can be made searchable. And when a record is retrieved during search, its attributes can be used in various other ways:

- Displayed as part of a search result in your search UI
- Used to filter results i.e. "search for products with _price_ < $100"
- Used to sort results i.e. "sort products from highest to lowest _rating_"

__Indexing__  

Indexing is the process of sending your records to Algolia and preparing them for search. When records are indexed, Algolia analyzes each record's attributes, makes them searchable and filterable based on your configurations, and stores them in an index so they can be quickly retrieved when users make a search. You can add new records to an index or update existing records whenever your data changes (i.e. when a product's price changes).

__Custom ranking__  

Out of the box, Algolia does well to provide relevant results based on how a user's search query matches the searchable attributes of your records. But there may be cases where you want to "put your thumb on the scale" to boost particular records up. This is often due to a business case, for example:

- "We want to push popular articles up and make them more visible in results"
- "We want to promote products that are currently on sale in results"

In these cases, custom rankings can be used to tell your search engine that it should consider specific attributes more than others when it ranks results. So to answer your question about what metrics to add in custom rankings, that will depend on your business goals and what records you would like to be more (or less) visible in search.

Let me know if you have a specific goal in mind and I can help get you started setting up specific custom rankings. Otherwise, I hope that this information helped clear some of these concepts up. If you want to go into more detail about anything, don't hesitate to ask!

Cheers,  
Mike
