export function getpdf(url) {
fetch('http://localhost:5000/' + url + '/getpdf' )
.then((response)=> response{
    console.log(response)
})
}
export function getcsv(url) {

}
export function getxls(url) {

}
export function search(url,data) {

}