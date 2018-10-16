function repeatedString(s, n) {
    var str = "a";    
    var result = 0;
    
    var repeatCount = parseInt(n / s.length);
    var remainCount = n%s.length;
    var repeatCharCount = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] === str){
            repeatCharCount++;
        }
    }

    result = repeatCount * repeatCharCount;
    
    for(var i=0; i<remainCount; i++){
        if(s[i] === str){
            result++;
        }
    }
    
    return result;
    
}