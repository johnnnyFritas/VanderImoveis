//local variables
const filterParagraph = document.querySelectorAll('#filter-text-animation');

//A forEach to select all elements that will appear when you use the filter, then will apply all functions for the animations

for(let i = 0; i <= 1; i++) {
    const opt = [];
    opt[i] = document.querySelector('#opt' + i);

    opt.forEach(element => {
        for(let i = 0; i < 2; i++) {
            const optChildren = [];
            optChildren[i] = element.children.item(i);

            optChildren[i].addEventListener('mouseover', ()=> {
                optChildren[i].classList.remove('pd1');
                for(let j = 0; j <= 2; j++) {
                    const optChildrenItem = [];
                    optChildrenItem[j] = optChildren[i].children.item(j);

                    optChildrenItem[j].classList.add('mouseIn-animation');

                    if(optChildrenItem[1]) {
                        optChildrenItem[1].classList.add('filterParagraphIn');
                    }

                    optChildrenItem[j].classList.remove('mouseOut-animation');

                    optChildrenItem[j].classList.remove('filterParagraphOut');

                    if(optChildren[0]) {
                        optChildren[0].classList.add('background-animationPiata');
                    }else if(optChildren[1]) {
                        optChildren[1].classList.add('background-animationMar');
                    }
                }
            });

            optChildren[i].addEventListener('mouseout', ()=> {
                for(let j = 0; j <= 2; j++) {
                    const optChildrenItem = [];
                    optChildrenItem[j] = optChildren[i].children.item(j);

                    optChildrenItem[j].classList.add('mouseOut-animation');

                    if(optChildrenItem[1]) {
                        optChildrenItem[1].classList.remove('filterParagraphIn');
                        optChildrenItem[1].classList.add('filterParagraphOut');
                    }
                }
            });
        } 

        
    });
}