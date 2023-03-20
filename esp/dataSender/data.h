#ifndef DATA_H
#define DATA_H
#include <queue>

namespace sword
{

    class data
    {
    private:
        int i=0;
    public:
        data(int i);
        data();
        ~data();
        const char * readable_out();
    };
    extern std::queue<data> dataPool;
    char * serializePool();
}

#endif