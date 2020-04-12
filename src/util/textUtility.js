var yourString = "The quick brown fox jumps over the lazy dog"; //replace with your string.
var maxLength = 10; // maximum number of characters to extract

//Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut)

export const truncateString = (str, length) => {
  //trim the string to the maximum length
  if (str.length > length) {
    var trimmedString = str.substr(0, length);
    //re-trim if we are in the middle of a word and
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );

    console.log(trimmedString.length + " - " + str.length);
    console.log();
    return trimmedString + "...";
  }
  return str;
};
