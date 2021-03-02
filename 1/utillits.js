export function getSelectValue(node) {
    return node.options[node.selectedIndex].textContent
}

export function fabricOption(attr, content, selected) {
    const option = document.createElement('option')
    option.setAttribute('name', attr)
    option.textContent = content
    if (selected) option.selected = true
    return option
}

export function changeSelect(target, select, data) {
    const selectName = target.options[target.selectedIndex].getAttribute('name')
    select.options.length = 0
    addOptionInSelect(data[selectName], select)
}

export function addOptionInSelect(data, el) {
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object') {
                el.appendChild(fabricOption(key, data[key].name, true))
            } else {
                el.appendChild(fabricOption(key, data[key]))
            }
        }
    }
}