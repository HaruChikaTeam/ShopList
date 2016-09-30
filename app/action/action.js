/*
 * action types
 */

export const ADD_SHOP = 'ADD_SHOP';
export const EDIT_SHOP = 'EDIT_SHOP';
export const DELETE_SHOP = 'DELETE_SHOP';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FILTER_SHOP = 'FILTER_SHOP';
/*

 * other constants
 */

/*
 * action creators
 */

export function addSHOP(shop_name, address) {
  return { 
  	type: ADD_SHOP, 
  	shop_name,
  	address
  }
}

export function editSHOP(shop_ID, shop_name, address) {
	return {
		type: EDIT_SHOP,
		shop_ID,
		shop_name,
		address
	}
}

export function deleteSHOP(shop_ID, rowID) {
	return {
		type: DELETE_SHOP,
		shop_ID,
		rowID
	}
}

export function addPRODUCT(shop_ID, product, price) {
	return {
		type: ADD_PRODUCT,
		shop_ID,
		product,
		price
	}
}

export function editPRODUCT(product_ID, product, price) {
	return {
		type: EDIT_PRODUCT,
		product_ID,
		product,
		price
	}
}

export function deletePRODUCT(product_ID) {
	return {
		type: DELETE_PRODUCT,
		product_ID
	}
}

export function filterSHOP(shop_ID) {
	return {
		type: FILTER_SHOP,
		shop_ID
	}
}
