// [TEST] 캐시 컨트롤 용 프록시
export default cachedEventHandler(
    async (event) => {
        const { url } = getQuery(event);

        if (!url) throw createError({ statusCode: 400 });

        return await $fetch(url as string);
    },
    {
        maxAge: 60 * 60,
        getKey: (event) => getQuery(event).url as string,
    },
);
