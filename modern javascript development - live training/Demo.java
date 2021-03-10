static int historyDocument(String input1) { 
    String str2 = ""; 

    Set<String> uniqueDates = new HashSet<>(); 

    for (int i = 0; i < input1.length(); i++) { 

        if (Character.isDigit(input1.charAt(i))) { 
            str2 += (input1.charAt(i)); 
        } 

        
        if (input1.charAt(i) == '-') { 
            str2 = ""; 
        } 

      
        if (str2.length() == 4) { 
            uniqueDates.add(str2); 
            str2 = ""; 
        } 
    } 

    
    return uniqueDates.size(); 
}