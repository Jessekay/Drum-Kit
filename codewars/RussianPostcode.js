function zipvalidate(postcode) {
    if(!/^\d{6}$/.test(postcode)) return false;
}