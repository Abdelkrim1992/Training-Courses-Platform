/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    const mapNumber = (X,A,B,C,D) => (X-A)*(D-C)/(B-A)+C;

	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
            posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
        return { x : posx, y : posy }
    }
    // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    // Effect 1
    class HoverImgFx1 {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'tp-img-reveal-wrapper';
            this.DOM.reveal.innerHTML = `<div class="tp-img-reveal-wrapper__inner">
                <div class="tp-img-reveal-wrapper__img" style="background-image:url(${this.DOM.el.dataset.img ? this.DOM.el.dataset.img: ''})">
                    <div class="tp-hover-wrapper"> 
                        <span class="tp-hover-subtitle">${this.DOM.el.dataset.subtitle ? this.DOM.el.dataset.subtitle: ''}</span>
                        <h3 class="tp-hover-title">${this.DOM.el.dataset.title ? this.DOM.el.dataset.title: ''}</h3>
                        <p>${this.DOM.el.dataset.desc ? this.DOM.el.dataset.desc: ''}</p>
                        <div class="tp-hover-meta">
                            <span>
                                <a href="${this.DOM.el.dataset.metaTagLink ? this.DOM.el.dataset.metaTagLink: '#'}">${this.DOM.el.dataset.metaTag ? this.DOM.el.dataset.metaTag: ''}</a>
                            </span>
                            <span>
                                <a href="${this.DOM.el.dataset.metaTimeLink ? this.DOM.el.dataset.metaTimeLink: '#'}">${this.DOM.el.dataset.metaTime ? this.DOM.el.dataset.metaTime: ''}</a>
                            </span>
                            <span>
                                <a href="${this.DOM.el.dataset.metaAuthorLink ? this.DOM.el.dataset.metaAuthorLink: '#'}">${this.DOM.el.dataset.metaAuthor ? this.DOM.el.dataset.metaAuthor: ''}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.tp-img-reveal-wrapper__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.tp-img-reveal-wrapper__img');

            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                    top : document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };
            
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {zIndex: 1});
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, {
                ease: Sine.easeOut,
                startAt: {x: '-100%'},
                x: '0%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                startAt: {x: '100%'},
                x: '0%'
            }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {zIndex: 9});
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {zIndex: ''});
                    TweenMax.set(this.DOM.reveal, {opacity: 0});
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')
            
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin');
        }
    }
    
    [...document.querySelectorAll('[data-fx="1"] > .tp-img-reveal-item, .tp-img-reveal-item[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
}
