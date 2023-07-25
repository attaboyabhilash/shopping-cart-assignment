import React, { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import styles from "./SideNavbar.module.scss"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

const navigations = {
  "5b6899953d1a866534f516e2": "Fruits & Vegetables",
  "5b6899123d1a866534f516de": "Bakery Cakes & Dairy",
  "5b675e5e5936635728f9fc30": "Beverages",
  "5b68994e3d1a866534f516df": "Beauty and Hygiene",
  "5b6899683d1a866534f516e0": "Baby Care",
}
const SideNavbar = () => {
  const { categoryId } = useParams()
  const history = useHistory()
  const [value, setValue] = useState(
    categoryId ? navigations[categoryId] : "Fruits & Vegitables"
  )
  const [showList, setShowList] = useState(false)

  const handleLinks = (tag, tagLabel) => {
    setValue(tagLabel)
    history.push(tag)
    setShowList(false)
  }

  const handleClick = (id) => {
    if (String(categoryId) === id) {
      history.push("/products")
    } else {
      history.push(`/products/${id}`)
    }
  }

  return (
    <>
      <aside className={styles.sidebar}>
        <ul className={styles.navigationList}>
          <li
            tabIndex="6"
            style={
              categoryId === "5b6899953d1a866534f516e2"
                ? { background: "#ddd" }
                : {}
            }
            onClick={() => handleClick("5b6899953d1a866534f516e2")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick("5b6899953d1a866534f516e2")
              }
            }}
          >
            Fruits &amp; Vegitables
          </li>
          <li
            tabIndex="7"
            style={
              categoryId === "5b6899123d1a866534f516de"
                ? { background: "#ddd" }
                : {}
            }
            onClick={() => handleClick("5b6899123d1a866534f516de")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick("5b6899123d1a866534f516de")
              }
            }}
          >
            Bakery Cakes and Dairy
          </li>
          <li
            tabIndex="8"
            style={
              categoryId === "5b675e5e5936635728f9fc30"
                ? { background: "#ddd" }
                : {}
            }
            onClick={() => handleClick("5b675e5e5936635728f9fc30")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick("5b675e5e5936635728f9fc30")
              }
            }}
          >
            Beverages
          </li>

          <li
            tabIndex="9"
            style={
              categoryId === "5b68994e3d1a866534f516df"
                ? { background: "#ddd" }
                : {}
            }
            onClick={() => handleClick("5b68994e3d1a866534f516df")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick("5b68994e3d1a866534f516df")
              }
            }}
          >
            Beauty and Hygiene
          </li>
          <li
            tabIndex="10"
            style={
              categoryId === "5b6899683d1a866534f516e0"
                ? { background: "#ddd" }
                : {}
            }
            onClick={() => handleClick("5b6899683d1a866534f516e0")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick("5b6899683d1a866534f516e0")
              }
            }}
          >
            Baby Care
          </li>
        </ul>
      </aside>
      <div
        className={styles.select_navigation}
        onClick={() => setShowList((prevVal) => !prevVal)}
      >
        {value}
        {showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <ul
        className={styles.select_list}
        style={showList ? { display: "block" } : { display: "none" }}
      >
        <li
          onClick={() =>
            handleLinks(
              "/products/5b6899953d1a866534f516e2",
              "Fruits & Vegitables"
            )
          }
        >
          Fruits &amp; Vegitables
        </li>
        <li
          onClick={() =>
            handleLinks(
              "/products/5b6899123d1a866534f516de",
              "Bakery Cakes and Dairy"
            )
          }
        >
          Bakery Cakes and Dairy
        </li>
        <li
          onClick={() =>
            handleLinks("/products/5b675e5e5936635728f9fc30", "Beverages")
          }
        >
          Beverages
        </li>
        <li
          onClick={() =>
            handleLinks(
              "/products/5b68994e3d1a866534f516df",
              "Beauty and Hygiene"
            )
          }
        >
          Beauty and Hygiene
        </li>
        <li
          onClick={() =>
            handleLinks("/products/5b6899683d1a866534f516e0", "Baby Care")
          }
        >
          Baby Care
        </li>
      </ul>
    </>
  )
}

export default SideNavbar
