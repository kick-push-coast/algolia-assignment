### Question

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

### Response

Hi Leo,

Great questions - the short answer is integrating Algolia is usually very manageable and the amount of development work will just depend on how complex of a solution you would like to implement. A lot of our users like to start with a simple integration to get going and learn the platform and then expand to a more complex integration later on. The good news is, if you want to enhance your integration and add more complex features later, you generally don't need to start over from scratch.

Here's a high-level summary of what the process is like:

1. __Identify the data you want to make searchable.__ This could be the webpages of your website or products from your online shop.
2. __Index the data using one of Algolia's indexing methods.__ These methods include:
    * Using a connector to connect Algolia directly to a data source
    * Uploading data from a CSV or JSON file
    * Sending data directly to Algolia using an indexing API
    * Manually entering data into an index through the dashboard
3. __Configure relevance, ranking, and filtering for your search index.__ Algolia can provide relevant search results right out of the box, so this step isn't technically required, but you have many configuration options at your disposal to control what content is searchable, what records are more or less visible, and filtering options for results.
4. __Add a search UI to your site.__ This can be as simple as a prebuilt template from Algolia that you can drop into any site, or you can build a more custom UI using tools like our InstantSearch libraries or search APIs.
5. __Iterate using analytics and feedback.__ Algolia give you insights into how your search is performing that can help you make informed decisions on search configurations and continuously improve as you go.

Let me know if you want to dig into any of these parts of the process in more detail! We also have detailed documentation at https://www.algolia.com/doc that can shed some light on how the process works in practice.

Cheers,  
Mike
