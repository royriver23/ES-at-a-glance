# Elastic Search at a glance

I'm trying to learn Elastic Search Rails integration, this is a demo using it on top on a simple sqlite database.

I'm basically using [this useful article](https://code.tutsplus.com/articles/full-text-search-in-rails-using-elasticsearch--cms-22920).

Gems used so far:

- [elasticsearch-model](https://github.com/elastic/elasticsearch-rails/tree/master/elasticsearch-model): The elasticsearch-model library builds on top of the the elasticsearch library. It aims to simplify integration of Ruby classes ("models"), commonly found e.g. in Ruby on Rails applications, with the Elasticsearch search and analytics engine.

- [elasticsearch-rails](https://github.com/elastic/elasticsearch-rails#elasticsearch): Multiple Elastic Search integrations. 

- [searchkick](https://github.com/ankane/searchkick):  Intelligent search made easy. Searchkick learns what your users are looking for. As more people search, it gets smarter and the results get better. It’s friendly for developers - and magical for your users.

Reindexing using **SearchKick**:

```bash
rake searchkick:reindex CLASS=Article
```
