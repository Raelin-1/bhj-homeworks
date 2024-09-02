document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null;

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            if (activeTooltip) {
                activeTooltip.remove();
            }

            // Create the tooltip element
            const tooltipText = tooltip.getAttribute('title');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip tooltip_active';
            tooltipElement.textContent = tooltipText;

            // Append the tooltip to the body
            document.body.appendChild(tooltipElement);

            // Click outside to close the tooltip
            document.addEventListener('click', (e) => {
                if (!tooltip.contains(e.target) && !tooltipElement.contains(e.target)) {
                    tooltipElement.remove();
                    activeTooltip = null;
                }
            }, { once: true });
        });
    });
});
