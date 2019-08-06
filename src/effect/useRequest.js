/**
 * use like:
 *
 * const url = 'xxx'
 * const [data, request] = useRequest(function(){
 *   return fetch('xxx')
 * }, [url])
 *
 * request()
 *
 * support:
 * 1. data.loading
 * 2. retry
 * 3. throttle
 *
 *
 * @param asyncPromise
 * @param deps
 */
function useRequest(asyncPromise, deps= []){

}
