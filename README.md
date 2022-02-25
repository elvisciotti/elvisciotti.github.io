*UNDER CONSTRUCTION ! See my full and updated work experience and tech skills details on [LinkedIn](https://www.linkedin.com/in/elvisciotti/?originalSubdomain=uk)*

# Projects

{% for project in site.projects %}
{{ project.name }} 
-----------------
{{ project.content }}

 * Role: {{ project.role }};
 * Type: {{ project.type }};
 * Year: {{ project.year }};
 * Tech stack: {{ project.techStack }};
 * Links: {{ project.links }}
    
{% endfor %}

### Other projects

 * [MyVoucherCodes](http://www.myvouchercodes.co.uk/): Led the team, internationalised in 4 languages, patched, improved, converted to industry standard framework, managed releases and evaluated new developer to hire, __top 10 UK traffic website__ in 2009. __200-500k daily unique visits_*. Tool to parse affilate networks content and voucher codes in multiople languages;
 * Eurimaco: Engine to collect news from thousands of blogs, __calculate the trending content_* (facebook, twitter API), transform and re-distribute content to various wordpress blogs, based on a set of rules (tag, language, trending score filter and twig templates);
 * Implemented a type system for [Jolie](http://www.jolie-lang.org/), a parser and interpreter for a new __Java based microservice language__
 * Single-handedly written [FeatureCompare](http://www.featurecompare.com/), an auto-generated __feature-comparison__ website with __auto-generated__ comparison charts and prices comparison suggesting. Used to be translated and hosted in 5 languages;
 * Chrome extension to extract e-commerce website product data into comparison tables. __4k+ users, rated 4.5/5__ by users. Written in React/Typescript and jest [Webpage on Chrome webstore](https://chrome.google.com/webstore/detail/compare-amazon-products-s/bbgnjgojcifngncffebelnaljklbiilf);
 * Redeveloped FanoInforma, a custom online magazine wrote with a bespoke framework of mine. Multi-user backend used by 15-20 journalists to daily publish articles;
 * See more work experience on [linkedin](https://www.linkedin.com/in/elvisciotti/?originalSubdomain=uk)

## Blog posts
Under construction

{% for post in site.posts %}
 *  <a href="{{ post.url }}">**{{ post.title }}**</a> *{{ post.date | date_to_string }}*
{% endfor %}


