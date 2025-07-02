function removeExclamatioMark(s) {
   while (s.includes("!")) {
    s = s.replace("!", "");
   }
   return s;
}

const hello = "mama mia!!";
console.log(removeExclamatioMark(hello));
