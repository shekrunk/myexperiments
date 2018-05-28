function copyElement(eleId) {
        var copyArea = $(eleId)[0],
            range = document.createRange(),
            success = true,
            selection,
            clipTxt = "";

        range.selectNode(copyArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try {
            success = document.execCommand("copy", false, null);
            if (success) {
                clipTxt = range.toString();
            }
        } catch (e) {
        }

        if (selection.rangeCount > 0) {
            selection.removeAllRanges();
        }
        return clipTxt;
    }
    
    var inputText = "";//form the text to be copied for IE
     if (window.clipboardData) {
          window.clipboardData.setData("Text", inputText); //set in IE clipboard the formed text
      } else {
         var text = this.copyElement('#clipBoardDiv'); // other browsers allow select from document directly
      }
