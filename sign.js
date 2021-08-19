function manasa()
{
       
         if( document.Form.user.value == "" ) {
            alert( "Please provide your UserName!" );
            document.Form.user.focus() ;
            return false;
         }
          if( document.Form.email.value == "" ) {
            alert( "Please provide your EmailId!" );
            document.Form.email.focus() ;
            return false;
         }
         if( document.Form.Num.value == "" || isNaN( document.Form.Num.value ) ||
            document.Form.Num.value.length != 10 ) {
            
            alert( "Please provide a Number Atleast 10 characters" );
            document.Form.Num.focus() ;
            return false;
         }
         if( document.Form.Password.value == "" || isNaN( document.Form.Password.value ) ||
            document.Form.Password.value.length != 8 ) {
            
            alert( "Please provide a Password Atleast 8 characters" );
            document.Form.Password.focus() ;
            return false;
         }
         
         return( true );
}
function jc(){
     if( document.Form.email.value == "" ) {
            alert( "Please provide your EmailId!" );
            document.Form.email.focus() ;
            return false;
         }
         if( document.Form.Password.value == "" || isNaN( document.Form.Password.value ) ||
            document.Form.Password.value.length != 8 ) {
            
            alert( "Please provide a Password Atleast 8 characters" );
            document.Form.Password.focus() ;
            return false;
         }
         
         return( true );
}