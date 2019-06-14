function foo() {
    var bar;
    quux = 9;
    function zip() {
        bar=true;
        var quux = 6;
    }
    return zip;
}