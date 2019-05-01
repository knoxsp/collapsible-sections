function collapsible(selector){
    if (typeof(selector) == "undefined"){
        targetContainer = document.querySelector('body')
    }else if (selector.find('#') == 0){
        //This will either be a container of collapsible divs or a single collapsible div
        targetContainer = document.querySelector(selector)
    }


    targetContainer.querySelectorAll('.collapsible').forEach(function(collapsibleContainer){
            var header = collapsibleContainer.querySelector('.collapsible-heading')
                                       .addEventListener('click', function(){
                                        var parent = collapsibleContainer.parentNode
                                        let collapsibleDiv = parent.querySelector('.collapsible-content')
                                        if (!collapsibleDiv.classList.contains('hidden')){
                                            collapsibleDiv.classList.add('hidden')
                                        }else{
                                            collapsibleDiv.classList.remove('hidden')
                                        }
                                    })
    })
}
