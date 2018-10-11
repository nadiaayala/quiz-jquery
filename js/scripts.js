$(function(){
    var i;
    var hits = 0;
    const $inputResults = $('#scoreResult');
    var $options = $('ol li');
    var $optionsItens = $('ol li');
    const $btnCheck = $('#check');
    const $btnRestart = $('#restart');
    const $modal = $('#score');
    $btnCheck.on('click', checkResults);
    $options.on('click', chooseOption);
    $btnRestart.on('click', restart);

    function chooseOption(){
               
        $(this).addClass('picked');        
        if($(this).attr('id')=='correct'){
            hits++;
            console.log(hits);
        }
    }   
    // function chooseOption(e){
    //     var $target = $(e.target);
    //     if($target.attr('class')=='picked'){
    //         $target.removeClass('picked');
    //     }
    //     else{
    //     $target.addClass('picked');
    //     }
    //     if($target.attr('id')=='correct'){
    //         hits++;
    //         console.log(hits);
    //     }
    // }
    function checkResults(){
        $inputResults.prepend(hits);
        $modal.addClass('showing');

    }
    function restart(){
        $inputResults.html('');
        $optionsItens.removeClass('picked');
        $modal.removeClass('showing');
        $modal.addClass('hideModal');
        hits=0;
        chooseOption(); 
    }
})