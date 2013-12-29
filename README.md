Developertoolbar for magento professionals
====================================

## DEMO

[Url: http://developertoolbar.mgt-commerce.com/](http://developertoolbar.mgt-commerce.com/)

## INSTALLATION

* copy all files to your magento installation
* Clear the cache in Admin > System > Cache Management 
* edit index.php and enable the profiler Varien_Profiler::enable();
* have fun and give feedback :)

## FEATURES

* Professional toolbar for frontend and backend

* Requests: involved controller classes, modules, actions and request parameters

* General Info: website id, website name, store id, store name, storeview id, storeview code, storeview name and configured caching method

* Handles: Displays all handles

* Events/Observer: Shows all events with it's observers

* Blocks: overview of block nesting

* Config: enable/disable frontend hints, inline translation and cache clearing

* PHP-Info: output of phpinfo()

* Profiling: output of Varien_Profiler with function execution time, function count and memory usage

* Additional Information: version information, page execution time and overall memory usage

* DB-Profiler: Number of executed queries, average query length, queries per second, longest query length, longest query and detailed query listing including simple syntax highlighting of SQL

## CHANGELOG

2.0.0.0

*  add handles and events/observers in info block
*  developer toolbar now available for backend

1.5.0.0

* fixed bug in profiler sort order