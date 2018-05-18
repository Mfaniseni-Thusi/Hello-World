// 1229215
// 18 May 2018

#include <iostream>
#include <vector>
#include <fstream>

using namespace std;

void funct(int*, int);
int main()
{
    ifstream inFile("input.txt");
    ofstream outFile("output.txt");
    vector<int> vec;
    int integer=0;

    while(inFile >> integer){
        vec.push_back(integer);
    }
//
//    for(int y=0; y<vec.size(); y++){
//        cout << vec.at(y) << " ";
//    }
//    cout << endl;

    int *arrPtr = &vec[0];
    funct(arrPtr, vec.size());
    return 0;
}

void funct(int* Ptr, int SIZE){
    int temp=0, secTemp=0;

    for(int i=0; i<SIZE; i++){
        temp = *(Ptr+i);
        for(int j=i; j<SIZE; j++){
            if(*(Ptr+j) < temp){
                secTemp = *(Ptr+j);
                *(Ptr+j) = temp;
                temp = secTemp;
            }
        }
        *(Ptr+i) = temp;
    }
    for(int r=0; r<SIZE; r++){
        cout << *(Ptr+r) << " ";
    }
}
