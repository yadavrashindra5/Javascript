const removeExtraText = (mtext) => {
  let textAlign,
    font,
    bold,
    italic,
    capitalize,
    text = "",
    textHeight,
    textWidth;
  let i = 0;
  while (i < mtext.length) {
    if (mtext.substring(i, i + 5) === "\\pxqc") {
      textAlign = "center";
      i = i + 5;
    } else if (mtext.substring(i, i + 2) === "qc") {
      textAlign = "center";
      i = i + 2;
    } else if (mtext.substring(i, i + 5) === "\\pxqr") {
      textAlign = "right";
      i = i + 5;
    } else if (mtext.substring(i, i + 2) === "qr") {
      textAlign = "right";
      i = i + 2;
    } else if (mtext.substring(i, i + 5) === "\\pxqd") {
      i = i + 5;
    } else if (mtext.substring(i, i + 2) === "qd") {
      i = i + 2;
    } else if (mtext.substring(i, i + 5) === "\\pxql") {
      textAlign = "left";
      i = i + 5;
    } else if (mtext.substring(i, i + 2) === "ql") {
      textAlign = "left";
      i = i + 2;
    } else if (mtext.substring(i, i + 2) === "\\f") {
      i = i + 2;
      const index = mtext.indexOf("|", i);

      font = mtext.substring(i, index);
      i = index;
    } else if (mtext.substring(i, i + 2) === "|b") {
      i = i + 2;
      if (mtext[i] === "1") {
        bold = true;
      }
      i++;
    } else if (mtext.substring(i, i + 2) === "|i") {
      i = i + 2;
      if (mtext[i] === "1") {
        italic = true;
      }
      i++;
    } else if (mtext.substring(i, i + 2) === "|c") {
      i = i + 2;
      if (mtext[i] === "1") {
        capitalize = true;
      }
      i++;
    } else if (mtext.substring(i, i + 2) === "|p") {
      i = i + 2;
      const index = mtext.indexOf(":", i);
      i = index;
    } else if (mtext[i] === "{") {
      i++;
      mtext = mtext.slice(0, -1);
    } else if (mtext.substring(i, i + 2) === ":{") {
      i = i + 2;
      mtext = mtext.slice(0, -1);
    } else if (mtext.substring(i, i + 3) === ":\\P") {
      text = mtext.substring(i + 3);
      break;
    }
    // else if (mtext[i] === ':') {
    // 	text = mtext.substring(i + 1);
    // 	break;
    // }
    else if (mtext.substring(i, i + 2) === "\\H") {
      const indexOfX = mtext.indexOf("x", i);
      textHeight = mtext.substring(i + 2, indexOfX);
      i = indexOfX + 1;
    } else if (mtext.substring(i, i + 2) === "\\W") {
      const indexOfX = mtext.indexOf("x", i);
      textWidth = mtext.substring(i + 2, indexOfX);
      i = indexOfX + 1;
    } else if (
      mtext[i] === "|" ||
      mtext[i] === " " ||
      mtext[i] === "}" ||
      mtext[i] === ":" ||
      mtext[i] === ","
    ) {
      i++;
    } else if (mtext.substring(i, i + 4) === "\\pxa") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 4) === "\\pxi") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 4) === "\\pxr") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 4) === "\\pxb") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 2) === "sm") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 5) === "\\pxsm") {
      const indexOfDelimiter =
        mtext.indexOf(",", i) > 0
          ? mtext.indexOf(",", i)
          : mtext.indexOf(":", i);
      i = indexOfDelimiter + 1;
    } else if (mtext.substring(i, i + 2) === "\\P") {
      i = i + 2;
    } else {
      //case 1: start with character and end with space like this "A paragraph"
      const findSpaceDelimiterIndex = mtext.indexOf(" ", i);
      const findParagraphBreakerIndex = mtext.indexOf("\\P", i);
      if (findSpaceDelimiterIndex != -1 && findParagraphBreakerIndex != -1) {
        if (findSpaceDelimiterIndex < findParagraphBreakerIndex) {
          text = text + mtext.substring(i, findSpaceDelimiterIndex + 1);
          i = findSpaceDelimiterIndex + 1;
        } else if (findParagraphBreakerIndex < findSpaceDelimiterIndex) {
          text = text + mtext.substring(i, findParagraphBreakerIndex) + " ";
          i = findParagraphBreakerIndex + 2;
        }
      } else if (
        findSpaceDelimiterIndex == -1 &&
        findParagraphBreakerIndex > 0
      ) {
        text = text + mtext.substring(i, findParagraphBreakerIndex) + " ";
        i = findParagraphBreakerIndex + 2;
      } else if (
        findParagraphBreakerIndex == -1 &&
        findSpaceDelimiterIndex > 0
      ) {
        text = text + mtext.substring(i, findSpaceDelimiterIndex + 1);
        i = findSpaceDelimiterIndex + 1;
      } else {
        text+=mtext.charAt(i);
        i++;
      }
      //case 2: start with character and end with \p

      //in case 2 we need to add space
      //find word from starting character to blank space and find word from starting character to \p
    }
  }
  return {
    textAlign,
    font,
    bold,
    italic,
    capitalize,
    text,
    textHeight,
    textWidth,
  };
};
const x = removeExtraText("\\pxi2.08333:A Paragraph\\PWith\\PIndent Left");
console.log(x);
