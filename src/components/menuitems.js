import React from "react"

const MenuItems = ({ categoryId, menuitems }) => {   
    return (
        <table className="uk-table">
            <tbody>
            { menuitems.map((menuitem, i) => {
                if (menuitem.node.category.id === categoryId ) {
                    return (
                        <tr>
                            <td>
                                <div className="uk-text-bold">{menuitem.node.serving.name}</div>
                                <div>{menuitem.node.serving.description}</div>
                            </td>
                            <td className="uk-text-nowrap uk-width-small uk-text-bold">
                                {menuitem.node.baseprice} {menuitem.node.currency}
                            </td>
                        </tr>
                    )
                } else {
                    return ""
                }
            })}
            </tbody>
        </table>
    )
}

export default MenuItems