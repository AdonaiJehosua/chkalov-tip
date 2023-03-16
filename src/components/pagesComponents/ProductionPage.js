import { Box } from "@mui/material"

const style = {
    
}

function letterAnimation(el, cls) {
    const tl = new TimelineMax({ paused: true });
    const characters = el.querySelectorAll(`.${cls}__char-inner`);
    const duration = el.hasAttribute('data-duration') ? el.dataset.duration : 0.3;
    const stagger = el.hasAttribute('data-stagger') ? el.dataset.stagger : 0.03;
    
    el.animation = tl.staggerTo(characters, duration, {
      y: '-100%',
      ease: Power4.easeOut
    }, stagger);
        
    el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
    el.addEventListener('mouseout', (event) => el.animation.reverse());
  }

export function ProductionPage() {
    return (
            <Box sx={style}>
                Prod
            </Box>
    )
}