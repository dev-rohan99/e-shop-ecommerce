

export const makeSlug = (text) => {
    const cleanedTitle = text.replace(/[^\w\s]/gi, "");
    const slug = cleanedTitle.replace(/\s+/g, "-").toLowerCase();
    return slug;
}

