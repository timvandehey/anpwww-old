document.querySelectorAll('[data-for]').forEach( el => {
    console.log(el)
    el.addEventListener('click', clickHandler)
}
 )

console.log('started')
document.querySelector('*[data-for=Home]').click()

function clickHandler (e) {
    const targetPanelId = e.currentTarget.dataset.for
    const targetPanel = document.getElementById(targetPanelId)
    if (!targetPanelId || !targetPanel) return
    document.querySelectorAll('panel').forEach(
        panel => panel.classList.add('hidden')
    )
    targetPanel.classList.remove('hidden')
}