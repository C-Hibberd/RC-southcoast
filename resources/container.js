class container {
    constructor ({panelID, hrefClass}) {
        this.__panel = document.getElementById(panelID);
        this.__hrefs = Array.from(document.getElementsByClassName(hrefClass));
        
        this.__hrefs.forEach(trigger => 
            trigger.addEventListener('click', e => {
                let id = trigger.dataset.moveto;
                
                this.__moveTo__(id)

                this.__hrefs.forEach(trig => {
                    trig.classList.remove('active')
                    if (trig.children[0]) {
                        trig.children[0].classList.add('material-icons-outlined')
                        trig.children[0].classList.remove('material-icons')
                    }
                })

                trigger.classList.add('active');
                if (trigger.children[0]) {
                    trigger.children[0].classList.add('material-icons')
                    trigger.children[0].classList.remove('material-icons-outlined')
                }
                
            })
        )

        this.__hrefs[0].click()

    }

    __moveTo__ (id) {
        if (!id || typeof id !== 'string') return
        
        let target = document.getElementById(id);
        if (target) target.scrollIntoView({behavior: "smooth"})
    }
}

export const Container = container;