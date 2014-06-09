var Headers = new function() {
    // Set up for header custom element
    var p = Object.create(HTMLElement.prototype);
    p.handleActionButtonClick = function(e) {
        var actionEvent = new Event('action');
        this.dispatchEvent(actionEvent);
    };
    p.createdCallback = function() {
        var template = document.querySelector('#header-template');
        var clone = template.content.cloneNode(true);
        var root = this.createShadowRoot();

        var actionButton = clone.querySelector('#action-button');
        var actionButtonSpan = clone.querySelector('#action-button-span');
        var header = clone.querySelector('#header');
        var title = clone.querySelector('#title');
        
        // Title
        var titleContent = this.getAttribute('title');
        var l10nId = this.getAttribute('data-l10n-id');
        if (titleContent) {
            title.innerHTML = titleContent;
            if (l10nId) {
                title.setAttribute('data-l10n-id', l10nId);
            }
        } else {
            title.style.display = 'none';
        }
        
        // Action button
        var actionType = this.getAttribute('action');
        var noAction = false;
        switch(actionType) {
        case 'back':
            actionButtonSpan.classList.add('icon-back');
            break;
        case 'close':
            actionButtonSpan.classList.add('icon-close');
            break;
        case 'menu':
            actionButtonSpan.classList.add('icon-menu');
            break;
        default:
            noAction = true;
            break;
        }
        if (noAction) {
            actionButton.style.display = 'none';            
        } else {
            actionButton.addEventListener('click', p.handleActionButtonClick.bind(this));
        }
        
        // Menu buttons
        var buttons = this.querySelectorAll("button[icon]");
        for (var i = 0, len = buttons.length; i < len; i++) {
            var spanNode = document.createElement("span");
            var buttonType = buttons[i].getAttribute('icon');
            spanNode.classList.add('icon');
            spanNode.classList.add('icon-'+buttonType);
            buttons[i].appendChild(spanNode);
        }
        
        root.appendChild(clone);
    };

    document.registerElement("gaia-header", { prototype: p, extends: "header" });
};