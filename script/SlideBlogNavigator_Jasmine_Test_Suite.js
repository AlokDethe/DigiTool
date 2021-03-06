describe("Test the initiation of the SlideBlogNavigator script", function(){
    
    it("An exception should be thrown, if the parameter passed is not of type object, test for string  ",function(){
        
        expect($SB.bind(this, "ok")).toThrow();
        
    });
    
    it("An exception should be thrown, if the parameter passed is not of type object, test for boolean  ",function(){
        
        expect($SB.bind(this, true)).toThrow();
    });
    
    it("An exception should be thrown, if the parameter passed is not of type object,, test for number  ",function(){
        
        expect($SB.bind(this, 4)).toThrow();
    });
    
    it("An exception should not be thrown, if parameter passed is empty object", function(){
        expect($SB.bind(this, {})).not.toThrow();
    });
    
    it("An exception should not be thrown, if parameter passed is an object with expected key", function(){
        expect($SB.bind(this, { setImageAsBackground: true })).not.toThrow();
    });
    
    it("An exception should be thrown, if parameter passed has unexpected key", function(){
        expect($SB.bind(this, { setMyOwnKey: true })).toThrow();
    });
        
});


describe("Spy if SlideBlogNav engine is called",function(){
    
    var obone;
    var funcObj = SlideBlogNav.prototype; /* For working with Spy */
    beforeEach(function(){
        
        console.log(" ==> GOT ==>"+funcObj+" "+($.type(obone) === "undefined"));
        
        spyOn(funcObj,'runSlideBlogNavEngine');
        obone = SlideBlogNav({});
    });
    
    it("tracks that a SlideBlogNav engine was called", function(){
        expect(funcObj.runSlideBlogNavEngine).toHaveBeenCalled();
    });
    
});



