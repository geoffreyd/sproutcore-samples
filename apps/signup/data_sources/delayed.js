// ==========================================================================
// Project:   Signup.Delayed
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Signup */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Signup.Delayed = SC.DataSource.extend(
/** @scope Signup.Delayed.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    // TODO: Add handlers to fetch data for specific queries.  
    // call store.dataSourceDidFetchQuery(query) when done.

    return NO ; // return YES if you handled the query
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    console.log('Delayed.retrieveRecord: %@'.fmt(storeKey)) ;
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    console.log('Delayed.createRecord: %@'.fmt(storeKey)) ;
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return YES ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    console.log('Delayed.updateRecord: %@'.fmt(storeKey)) ;
    // call store.dataSourceDidComplete(storeKey) when done.

    return YES ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    console.log('Delayed.destroyRecord: %@'.fmt(storeKey)) ;
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return YES ; // return YES if you handled the storeKey
  }
  
}) ;
