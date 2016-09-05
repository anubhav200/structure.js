// Test Runner
function TestRunner(){
    var $resultsContainer = document.getElementsByClassName("test-results")[0];
    var $status = document.getElementsByClassName("status")[0];
    var totalTests = 0,
        totalResults = 0;
    function addResult(name,result,expectedValue,actualValue){
        var $testName = document.createElement("p");
        var $status = document.createElement("span");
        $testName.innerText = name+" : ";
        $status.innerText = result? "PASS": "FAIL: expected value:("+ expectedValue+", actual value:"+actualValue+")";
        $status.className = result? "PASS": "FAIL";
        $testName.appendChild($status);
        $resultsContainer.appendChild($testName);
    }

    function updateStatus(){
     $status.innerText = totalResults+" / "+totalTests;
    }



    function getExpect(name){
        return function(a,b){
            totalResults++;
            var result = (a === b);
            addResult(name,result, b,a);
            updateStatus();
        };
    }

    return function(name,fn){
        totalTests++;
        updateStatus();
        fn.apply(null,[getExpect(name)])
    };
}

var it = TestRunner();


// Test runner specs;
it("Test Runner should run",function(expect){
    expect(true,true);
});
it("Test should run after 1 sec",function(expect){
    setTimeout(function(){
        expect(true,true);
    },1000);
});



