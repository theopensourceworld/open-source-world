int strStr(char *haystack, char *needle) {
    int n = strlen(haystack);
    int m = strlen(needle);

    if (m == 0)
        return 0;

    for (int i = 0; i <= n - m; i++) {
        int j = 0;
        while (j < m && haystack[i + j] == needle[j]) {
            j++;
        }
        if (j == m) {
            return i;
        }
    }
    return -1;
}
