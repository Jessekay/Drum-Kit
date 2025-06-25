function zipvalidate(postcode) {
    if(!/^\d{6}$/.test(postcode)) return false;

    if(/[05789]/.test(postcode[0])) return false;

    return true;
}